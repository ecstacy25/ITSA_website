import React from "react";
import "./Subscription.css";

const SubscriptionPlans = () => {
  return (
    <div className="subscription-plans">
      <h1>DHMS Subscription Plans</h1>
      <p>All-in-one solutions designed for organizations, students, and families</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Corporate DHMS</th>
              <th>Student DHMS</th>
              <th>Family DHMS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Windows</td>
              <td>₦3,500/device/month</td>
              <td>₦3,500/device/month</td>
              <td>₦3,500/device/month</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>₦12,000/device/month</td>
              <td>₦12,000/device/month</td>
              <td>₦12,000/device/month</td>
            </tr>
            <tr>
              <td>Annual Payment Plan</td>
              <td>₦3,000 Per Device/Month</td>
              <td>Annual</td>
              <td>Annual</td>
            </tr>
            <tr>
              <td>Bi - Annual Payment Plan</td>
              <td>₦3,500 Per Device/Month</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Deployment/Setup Fee</td>
              <td>From ₦1,500,000</td>
              <td>Free</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Support Access</td>
              <td>24/7 Support</td>
              <td>24/7 Support</td>
              <td>24/7 Support</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
