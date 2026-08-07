import { useEffect, useState } from "react";

import { getJson } from "../services/api";

type EntityTableProps = {
  title: string;
  endpoint: string;
};

function formatValue(value: unknown) {
  if (value == null) {
    return "-";
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return JSON.stringify(value);
}

function EntityTable({ title, endpoint }: EntityTableProps) {
  const [rows, setRows] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadRows() {
      try {
        setLoading(true);
        setError(null);

        const response = await getJson<unknown>(endpoint);
        const data = Array.isArray(response) ? response : response ? [response] : [];

        if (active) {
          setRows(data as Record<string, unknown>[]);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load data");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadRows();

    return () => {
      active = false;
    };
  }, [endpoint]);

  const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

  return (
    <section className="page-section">
      <div className="page-section__header">
        <div>
          <h2>{title}</h2>
          <p>Loaded from {endpoint} through the Vite dev proxy.</p>
        </div>
      </div>

      {loading ? <p className="status-message">Loading...</p> : null}

      {error ? <p className="status-message status-message--error">{error}</p> : null}

      {!loading && !error && rows.length === 0 ? (
        <p className="status-message">No records returned by the backend.</p>
      ) : null}

      {!loading && !error && rows.length > 0 ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={column}>{formatValue(row[column])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

export default EntityTable;