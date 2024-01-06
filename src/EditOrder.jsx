import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";

const EditOrder = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      orderId: "",
      orderNumber: "",
      status: "",
      item: "",
      customerName: "",
      trackingCode: "",
    },
    onSubmit: async (values,formikbag) => {
      console.log("Form submitted with values:", values);
      try {
        await axios.put(
          `https://65630c3eee04015769a6bb77.mockapi.io/orders/${id}`,
          values
        );

        alert("Order has been updated successfully");
        formikbag.resetForm()
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://65630c3eee04015769a6bb77.mockapi.io/orders/${id}`
        );

        formik.setValues(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <label>ORDER ID</label>
              <input
                type="text"
                className="form-control"
                name="orderId"
                value={formik.values.orderId}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label>ORDER NUMBER</label>
              <input
                type="text"
                className="form-control"
                name="orderNumber"
                value={formik.values.orderNumber}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label>ITEM</label>
              <input
                type="text"
                className="form-control"
                name="item"
                value={formik.values.item}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label>CUSTOMER NAME</label>
              <input
                type="text"
                className="form-control"
                name="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
              />
            </div>

            <div className="col-lg-4">
              <label>TRACKING CODE</label>
              <input
                type="number"
                className="form-control"
                name="trackingCode"
                value={formik.values.trackingCode}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label>status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <input type="submit" className="btn btn-primary" value={"Update"} />
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link className="btn" to="/">
          <button className="btn btn-success ml-5">View Orders</button>
        </Link>
      </div>
    </>
  );
};

export default EditOrder;
