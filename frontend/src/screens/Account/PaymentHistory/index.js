import React from 'react';
import { useDispatch } from 'react-redux';
import { getOrderList } from '../../../actions/PaymentHistoryActions';

const PaymentHistory = () => {
  const dispatch = useDispatch();
  const [paymentList, setPaymentList] = React.useState([]);

  React.useEffect(() => {
    dispatch(getOrderList())
      .then(({ payload }) => {
        const newData = payload.data.data.rows;
        setPaymentList(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <table
          id="dt-basic-example"
          className="table table-bordered table-hover w-100 dataTable dtr-inline"
          role="grid"
          aria-describedby="dt-basic-example_info"
        >
          <thead>
            <tr role="row">
              <th
                tabIndex={0}
                rowSpan={1}
                colSpan={1}
                style={{ width: '143px' }}
              >
                Offer ID
              </th>
              <th tabIndex={0} rowSpan={1} colSpan={1}>
                Offer Title
              </th>
              <th tabIndex={0} rowSpan={1} colSpan={1}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentList.map((payment) => (
              <tr key={payment.id} role="row" className="even">
                <td className="dtr-control sorting_1" tabIndex={0}>
                  {payment.id}
                </td>
                {console.log(payment)}
                <td>
                  <span className="fs-lg text-dark">250 Tibia Coins</span>
                  <br />
                  <small className="text-muted">Created 18.08.2019</small>
                </td>
                <td>
                  <span className="badge badge-primary badge-pill">
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
