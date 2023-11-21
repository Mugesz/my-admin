import { useFormik } from "formik";
import React from "react";

const Createuser = () => {
  const formik = useFormik({
    initialValues: {
      orderId: "",
      orderNumber: "",
      status: "",
      item: "",
      customerName: "",
      shipingService: "",
      trackingCode: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
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
              type="number"
              className="form-control"
              name="orderNumber"
              value={formik.values.orderNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-4">
            <label>STATUS</label>
            <input
              type="text"
              className="form-control"
              name="status"
              value={formik.values.status}
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
            <label>SHIPING SERVICE</label>
            <input
              type="text"
              className="form-control"
              name="shipingService"
              value={formik.values.shipingService}
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
          <div className="col-lg-12 mt-4">
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Createuser;
