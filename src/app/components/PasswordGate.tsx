import { useState, useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import "./PasswordGate.css";

const STORAGE_KEY = "stat-unlocked";
const CORRECT_PASSWORD = "HiFriendo";

interface PasswordGateProps {
  children: ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  // Check session on mount — if already unlocked this session, skip the gate
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    if (error) setError(false);
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="password-gate">
      <Header />
      <div className="password-gate__card">


        <svg className="password-gate__lock" xmlns="http://www.w3.org/2000/svg" width="96" height="114.28" viewBox="0 0 99 118" fill="none" aria-hidden="true">
          {/* Body — yellow */}
          <path d="M97.1066 53.7849H1.5L2.99385 115.78L97.1066 114.286V53.7849Z" fill="var(--color-accent-yellow)" />
          {/* Shackle — pink fill, black stroke */}
          <path d="M11.2101 42.8434C10.5742 49.1407 10.5 52.7789 10.5 53.0379H19.4648C19.5813 48.5107 19.9336 45.0692 20.1265 43.7435C20.4424 40.615 21.5044 36.5801 22.7101 32.9058C23.8381 29.4683 25.1436 26.7626 26.6388 24.2607C28.1515 21.7294 29.8148 19.4983 31.2341 17.8243L31.2414 17.8141L31.2502 17.8053C34.4353 14.0044 39.6507 11.7346 42.1462 11.1268C43.5777 10.8543 45.9042 10.68 48.4878 10.5476C50.9329 10.4223 53.1592 10.4384 55.0001 10.5841C56.7509 10.7226 58.0978 10.9781 59.8434 11.5002C61.6889 12.0522 63.8663 12.8737 65.3608 13.547C67.0902 14.3263 68.8656 15.9168 71.5915 18.9491C72.5632 20.0301 73.2978 21.1972 74.2349 22.9419C75.0962 24.5456 75.9416 26.4488 76.6974 29.088C77.4624 31.7596 78.1203 35.1655 78.5224 39.1496C78.9255 43.1437 79.0493 47.5751 79.1804 52.3565L88.1435 52.2238L88.142 52.1625L88.1405 52.1053C88.0116 47.4022 87.8808 42.6287 87.4389 38.2495C86.9926 33.8285 86.2502 29.8879 85.3148 26.6211C84.37 23.322 83.273 20.8262 82.1316 18.7011C81.0662 16.7174 79.934 14.8218 78.2569 12.9562C75.5374 9.93097 72.664 7.00666 69.0414 5.37456C67.1862 4.53878 64.6381 3.57777 62.4124 2.91203C60.0866 2.21636 58.1158 1.83927 55.7076 1.64868C53.3894 1.46523 50.7608 1.4561 48.0283 1.59616C45.4863 1.72646 42.4782 1.92237 40.3183 2.35038L40.2395 2.36643L40.1622 2.38539C36.452 3.25987 29.2168 6.28882 24.3965 12.0283C22.6929 14.0377 20.7353 16.6663 18.9448 19.6624C17.1368 22.6879 15.5441 25.9959 14.1934 30.1121C12.9203 33.992 11.6233 38.7504 11.2101 42.8434Z" fill="var(--color-brand-accent-light)" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          {/* Keyhole — pink fill */}
          <path d="M56 96.9999H41.5C42.3333 91.9999 43.8 81.7 43 80.5C42 79.0001 39.5 73.9999 41.5 69.4999C43.5 64.9999 48.5 65.9999 50 65.9999C51.5 65.9999 54.5 67.9999 55 67.9999C55.5 67.9999 57 73.9999 56.5 75.9999C56.1 77.5999 53 80.6666 51.5 81.9999L56 96.9999Z" fill="var(--color-brand-accent)" />
          {/* Body outline strokes */}
          <path d="M1.5 53.689C1.5 53.7084 1.5 53.7278 1.69476 63.7336C1.88951 73.7394 2.27902 93.731 2.71007 114.633" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M1.9364 53.3418C1.94376 53.3418 1.95112 53.3418 17.4414 53.2543C32.9317 53.1667 63.9048 52.9916 79.9908 52.9104C96.0769 52.8293 96.3374 52.8474 96.6058 52.8661" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M2.83063 115.525C2.83799 115.525 2.84534 115.525 18.3357 115.437C33.826 115.349 64.799 115.174 80.8851 115.093C96.9711 115.012 97.2316 115.03 97.5 115.049" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M97.1483 53.6704C97.1483 53.7143 97.1483 53.7582 97.2153 61.2036C97.2822 68.649 97.4162 83.4946 97.4664 93.672C97.5166 103.849 97.4791 108.909 97.4404 114.121" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          {/* Keyhole outline strokes */}
          <path d="M42.9415 80.3175C42.3165 79.4571 40.7536 77.0509 40.3629 75.1215C39.8151 72.4167 40.6354 71.2415 41.7077 69.1726C42.2335 68.158 43.0435 67.5602 44.1806 66.9225C45.306 66.2913 47.1399 66.0623 48.8739 65.887C50.9444 65.6776 52.7861 66.4819 53.8381 67.1603C55.5696 68.2768 55.9353 69.8007 56.2804 71.6004C56.6763 73.6652 56.3478 75.2379 56.1878 75.8908C55.9072 77.0356 55.3825 78.0897 54.9616 78.7824C53.7086 79.8562 52.3148 80.5561 51.9099 80.7453C51.7301 80.8283 51.6028 80.8848 51.4715 80.9432" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M43.3699 81.0397C43.3699 81.0517 43.3699 81.0638 43.1536 82.902C42.9372 84.7403 42.5045 88.4043 42.1719 90.931C41.8393 93.4577 41.62 94.736 41.5006 95.4812C41.3812 96.2263 41.3685 96.3996 41.3554 96.578" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M51.7032 81.5277C51.7032 81.7655 51.752 82.4409 52.1618 83.701C52.5015 84.7454 53.1946 86.5832 53.8175 88.5895C54.4403 90.5959 54.9939 92.7077 55.3025 93.9512C55.611 95.1948 55.6579 95.5062 55.7066 95.9515" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
          <path d="M41.4968 97.1566C41.5636 97.1566 43.0979 97.1938 46.5624 97.2773C48.5271 97.3236 50.9111 97.3779 52.5732 97.3887C54.2354 97.3994 55.1034 97.365 55.9977 97.3296" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="password-gate__text">
          <h1 className="password-gate__heading">
            This content is password protected.
          </h1>

          <p className="password-gate__description">
            To view, please enter the
            password.
          </p>
        </div>

        <div className="password-gate__form-wrapper">
          <form
            className={`password-gate__form${error ? " password-gate__form--error" : ""}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <label htmlFor="gate-password" className="visually-hidden">
              Password
            </label>
            <input
              id="gate-password"
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={handleInputChange}
              className="password-gate__input"
              autoComplete="current-password"
              autoFocus
              aria-describedby={error ? "gate-error" : undefined}
            />
            <button type="submit" className="card-arrow" aria-label="Submit password">
              <svg width="15" height="11" viewBox="0 0 15 11" aria-hidden="true">
                <path
                  d="M0.50001 5.16341C0.581777 5.08164 1.59283 4.90733 4.05926 4.7385C5.55676 4.70186 7.55346 4.76478 8.73446 4.81831C9.91547 4.87185 10.2203 4.91409 10.7208 5.05742"
                  strokeLinecap="round"
                />
                <path
                  d="M10.1493 1.64917C10.3905 1.89038 11.7342 3.2341 13.4315 5.11175C13.9769 5.71512 13.6086 5.82989 13.1771 5.9882C12.1922 6.40135 11.1284 6.81337 10.2091 7.10965C9.78358 7.25648 9.44129 7.39617 8.47883 7.73418"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
          {error && (
            <p id="gate-error" className="password-gate__error" role="alert">
              Incorrect password. Please try again or{" "}
              <a
                href="mailto:danliudesigner@gmail.com?subject=Beep-boop, request for password&body=Hello, this is {name}. %0D%0A I'd love to request the password for your case study pages."
                className="password-gate__error-link"
              >
                contact me
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
