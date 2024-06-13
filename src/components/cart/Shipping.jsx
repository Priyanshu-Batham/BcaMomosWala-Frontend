import React from "react";
import "../../style/shipping.scss";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>

            {/* House No */}
          <div>
            <label htmlFor="house">House No</label>
            <input type="text" placeholder="Enter House No" name="house" />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country">Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label htmlFor="state">State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry('IN').map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pincode">Pincode</label>
            <input type="number" placeholder="Enter Pincode" name="pincode" />
          </div>
          <div>
            <label htmlFor="phone">Phone No</label>
            <input type="number" placeholder="Enter Phone No" name="phone" />
          </div>
          <button>Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
