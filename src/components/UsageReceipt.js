import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../context/itemProvider";
import { format } from "date-fns";
// import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "../app/api/axios";

const UsageReceipts = () => {
  const { getReceipts, receipts, currency, numberWithCommas } =
    useContext(ItemContext);
  const [usageRecipt, setUsageRecipt] = useState([]);
  console.log(receipts);

  const getUsage = async () => {
    const response = await axios.get("/used");
    console.log(response.data);
    setUsageRecipt(response.data);
  };
  useEffect(() => {
    getUsage();
  }, []);

  const removeItem = async () => {
    console.log("removed");
  };

  return (
    <div>
      <h3>Usage Receipts</h3>
      {usageRecipt.map((receipt) => {
        const theDay = format(receipt.date, "dd/MM/yyyy");
        return (
          <div className="receipt-main-cont">
            <section className="date-and-id">
              <p>{receipt._id}</p>
              <p>{theDay}</p>
            </section>
            <article className="usage-items-header">
              <h4>item</h4>
              <h4>qty</h4>
              <h4>desc</h4>
              <h4>cost</h4>
            </article>
            <hr />
            <section className="good-outer">
              {receipt.goods.map((good) => {
                return (
                  <div className="usage-goods-container">
                    <p className="good-name"> {good.name}</p>
                    <p className="good-measure">
                      {good.qty}
                      {good.unitMeasure}
                    </p>
                    <p>{good.description}</p>
                    <p>
                      {currency}
                      {numberWithCommas(parseFloat(good.total).toFixed(2))}
                    </p>
                  </div>
                );
              })}
            </section>
            <hr className="horizontal" />
            <section className="total-elements">
              <h2 onClick={() => removeItem(receipt._id)}>
                <FaTrashAlt role="button" />
              </h2>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default UsageReceipts;
