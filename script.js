<!-- CREDIT SCORE ESTIMATOR SECTION -->
<section id="score-calculator" class="section-light">
  <div class="container">
    <div class="section-heading">
      <h2>Credit Score Estimator</h2>
      <p>
        This tool is for educational purposes only. It does <strong>not</strong> generate a real FICO® score,
        but it shows how different factors can affect your credit profile.
      </p>
    </div>
         <style>
    body {
        background-color: #014421; /* Forest green */
        color: #F0FFFF;           /* Arctic white */
        font-family: Arial, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, a, li, span, div {
        color: #F0FFFF; /* Make all text arctic white */
    }
</style>
 

    <div class="why-grid">
      <!-- LEFT: CONTROLS -->
      <div class="why-side-card">
        <h4>Adjust Your Credit Profile</h4>

        <!-- PAYMENT HISTORY -->
        <div class="why-block">
          <label for="paymentHistory">
            Payment History (on-time payments)
          </label>
          <input id="paymentHistory" type="range" min="0" max="100" value="90" />
          <div class="hero-footnote">
            <span id="paymentHistoryValue">90</span>% on-time
          </div>
        </div>

        <!-- UTILIZATION -->
        <div class="why-block">
          <label for="utilization">
            Credit Card Utilization (how much of your limit you use)
          </label>
          <input id="utilization" type="range" min="0" max="100" value="30" />
          <div class="hero-footnote">
            <span id="utilizationValue">30</span>% of limits used
          </div>
        </div>

        <!-- AGE OF CREDIT -->
        <div class="why-block">
          <label for="age">
            Age of Oldest Account (years)
          </label>
          <input id="age" type="range" min="0" max="20" value="5" />
          <div class="hero-footnote">
            <span id="ageValue">5</span> years
          </div>
        </div>

        <!-- NEW CREDIT -->
        <div class="why-block">
          <label for="newAccounts">
            New Accounts / Inquiries (last 12 months)
          </label>
          <input id="newAccounts" type="range" min="0" max="10" value="1" />
          <div class="hero-footnote">
            <span id="newAccountsValue">1</span> recent inquiries/accounts
          </div>
        </div>

        <!-- MIX OF CREDIT -->
        <div class="why-block">
          <label for="mix">
            Mix of Credit Types
          </label>
          <input id="mix" type="range" min="0" max="100" value="60" />
          <div class="hero-footnote">
            <span id="mixValue">60</span>% healthy mix
          </div>
        </div>

        <button class="btn-primary" style="margin-top:14px;" onclick="calculateScore()">
          Estimate My Score
        </button>
      </div>

      <!-- RIGHT: RESULT -->
      <div class="why-side-card">
        <h4>Your Estimated Score</h4>
        <div style="font-size:3rem; font-weight:800; margin:10px 0;">
          <span id="scoreResult">680</span>
        </div>
        <p id="scoreLabel" style="font-weight:600; margin-bottom:10px;">
          Fair – There’s room for improvement.
        </p>
        <p style="font-size:0.9rem; color:#6b7280;">
          This is a rough educational estimate based on common credit scoring factors:
          payment history, utilization, age of accounts, new credit, and mix of credit.
          Your real score will vary by lender and scoring model.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SCORE CALCULATOR SCRIPT -->
<script>
  // Update the live values next to the sliders
  const paymentHistory = document.getElementById("paymentHistory");
  const paymentHistoryValue = document.getElementById("paymentHistoryValue");
  const utilization = document.getElementById("utilization");
  const utilizationValue = document.getElementById("utilizationValue");
  const age = document.getElementById("age");
  const ageValue = document.getElementById("ageValue");
  const newAccounts = document.getElementById("newAccounts");
  const newAccountsValue = document.getElementById("newAccountsValue");
  const mix = document.getElementById("mix");
  const mixValue = document.getElementById("mixValue");

  function bindSlider(slider, label, suffix = "") {
    slider.addEventListener("input", () => {
      label.textContent = slider.value;
      if (suffix === "%") {
        label.textContent = slider.value;
      }
    });
  }

  bindS
