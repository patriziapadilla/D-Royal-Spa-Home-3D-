"""Backend API tests for D'Royal Spa Miami landing page."""
import pytest


# ---------- Health ----------
class TestHealth:
    def test_root_api(self, api_client, base_url):
        r = api_client.get(f"{base_url}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "DRoyal" in data["message"] or "Spa" in data["message"]


# ---------- Reservations ----------
class TestReservations:
    def test_create_reservation_minimal(self, api_client, base_url):
        payload = {
            "nombre": "TEST_Maria Lopez",
            "telefono": "+17865550101",
            "tratamiento": "lipo-laser",
        }
        r = api_client.post(f"{base_url}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["nombre"] == payload["nombre"]
        assert data["telefono"] == payload["telefono"]
        assert data["tratamiento"] == payload["tratamiento"]
        assert "id" in data and isinstance(data["id"], str)
        assert data["estado"] == "nuevo"
        assert "_id" not in data

    def test_create_reservation_full(self, api_client, base_url):
        payload = {
            "nombre": "TEST_Ana Perez",
            "telefono": "+17865550202",
            "email": "test_ana@example.com",
            "tratamiento": "botox-natural",
            "area": "Brickell",
            "fecha_preferida": "Sábado por la tarde",
            "mensaje": "TEST mensaje",
        }
        r = api_client.post(f"{base_url}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == payload["email"]
        assert data["area"] == "Brickell"

    def test_create_reservation_missing_required(self, api_client, base_url):
        # missing telefono
        r = api_client.post(f"{base_url}/api/reservations", json={"nombre": "X", "tratamiento": "lipo-laser"})
        assert r.status_code == 422

    def test_list_reservations_no_objectid(self, api_client, base_url):
        # ensure at least one created
        api_client.post(f"{base_url}/api/reservations", json={
            "nombre": "TEST_List Check",
            "telefono": "+17865550303",
            "tratamiento": "coolsculpting",
        })
        r = api_client.get(f"{base_url}/api/reservations")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for item in items:
            assert "_id" not in item
            assert "id" in item
            assert "nombre" in item
            assert "telefono" in item
            assert "tratamiento" in item

    def test_create_reservation_persists(self, api_client, base_url):
        payload = {
            "nombre": "TEST_Persistencia",
            "telefono": "+17865559999",
            "tratamiento": "aumentos",
        }
        cr = api_client.post(f"{base_url}/api/reservations", json=payload)
        assert cr.status_code == 200
        rid = cr.json()["id"]
        lr = api_client.get(f"{base_url}/api/reservations")
        assert lr.status_code == 200
        ids = [x["id"] for x in lr.json()]
        assert rid in ids


# ---------- Leads ----------
class TestLeads:
    def test_create_lead_with_phone(self, api_client, base_url):
        r = api_client.post(f"{base_url}/api/leads", json={
            "nombre": "TEST_Lead Phone",
            "telefono": "+17865551111",
            "fuente": "web",
            "tratamiento_interes": "lipo-laser",
        })
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["telefono"] == "+17865551111"
        assert "id" in data

    def test_create_lead_with_email(self, api_client, base_url):
        r = api_client.post(f"{base_url}/api/leads", json={
            "email": "test_lead@example.com",
        })
        assert r.status_code == 200
        data = r.json()
        assert data["email"] == "test_lead@example.com"

    def test_create_lead_no_contact_returns_400(self, api_client, base_url):
        r = api_client.post(f"{base_url}/api/leads", json={"nombre": "no contact"})
        assert r.status_code == 400
        data = r.json()
        assert "detail" in data
