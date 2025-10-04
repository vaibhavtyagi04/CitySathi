// ViewReports.jsx
import React, { useEffect, useState } from "react";
import { query, collection, orderBy, getDocs, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ViewReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      if (!auth.currentUser) {
        navigate("/login");
        return;
      }

      try {
        // ✅ If you only want logged-in user's reports
        const q = query(
          collection(db, "reports"),
          where("userId", "==", auth.currentUser.uid),
          orderBy("timestamp", "desc")
        );

        // 🔹 If you want ALL reports (for admin/global view), use:
        // const q = query(collection(db, "reports"), orderBy("timestamp", "desc"));

        const snapshot = await getDocs(q);
        setReports(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching reports:", err);
        setError("Failed to load reports. Please check permissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="reports-page">
        <h2>📊 My Reports</h2>

        {loading && <p>Loading reports...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="reports-grid">
          {reports.length > 0 ? (
            reports.map((report) => (
              <div key={report.id} className="report-card">
                {report.imageUrl && (
                  <img
                    src={report.imageUrl}
                    alt="issue"
                    className="report-image"
                  />
                )}
                <div className="report-details">
                  <h3>📌 {report.category}</h3>
                  <p>{report.description}</p>
                  <p>
                    <strong>📍 {report.location?.address || "Location not set"}</strong>
                  </p>
                  <p>
                    <small>
                      🕒{" "}
                      {report.timestamp
                        ? report.timestamp.toDate().toLocaleString()
                        : "No time recorded"}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>No reports found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
