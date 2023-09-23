import React from "react";

import "../assets/styles/Orders.scss";

import Table from "../components/UI/Table";

const Orders = () => {
  return (
    <section className="orders_page">
      <h2 className="order_title">My Orders</h2>
      <div className="order_table">
        <Table headings={["Order Id", "Product", "Total", "Status"]}>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Iphone 14 Pro</td>
              <td>$105</td>
              <td>
                <p className="status delivered">Delivered</p>
              </td>
            </tr>
            <tr>
              <td>#001</td>
              <td>Iphone 14 Pro</td>
              <td>$105</td>
              <td>
                <p className="status cancelled">Cancel</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Orders;
