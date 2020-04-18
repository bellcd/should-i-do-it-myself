import React from "react"
import { Link } from "gatsby"
import { Formik, Form, Field } from 'formik';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      yearlyIncome: 0,
      hoursInAYear: 8760,
      ratePerHourAlive: null
    };
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Formik
          initialValues={{
            name: '',
            yearlyIncome: 0,
          }}

          onSubmit={(values, { setSubmitting }) => {
            this.setState({ ...values });
            setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />

            <label htmlFor="yearlyIncome">Yearly Income (after tax)</label>
            <Field name="yearlyIncome" type="number" step={1} />

            <button type="submit">Submit</button>
          </Form>
        </Formik>


        <div>Your current mix of activities (working, eating, sleeping, relaxing, etc...) provides you ${(this.state.yearlyIncome / this.state.hoursInAYear).toFixed(2)} for every hour that you're alive.</div>


        <h2>Some Thoughts</h2>
        <div>Does that mean your </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}