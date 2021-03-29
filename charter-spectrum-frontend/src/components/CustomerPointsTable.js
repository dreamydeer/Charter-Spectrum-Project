import DataTable from 'react-data-table-component';
import {createCustomerResultObj} from '../helpers/pointCalculationHelper'

const createCustomerResultJsx = function(customerResultObj) {
  return (
    <div className="customerResultInfo">
      <strong>name:</strong> {customerResultObj.name}<br/>
      <strong>september points:</strong> {customerResultObj.septemberPoints}<br/>
      <strong>october points:</strong> {customerResultObj.octoberPoints}<br/>
      <strong>november points:</strong> {customerResultObj.novemberPoints}<br/>
      <strong>total point:</strong> {customerResultObj.totalPoints}
    </div>
  )
}

const tableColumns = [
    {
        name: 'Customer Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'September Points',
        selector: 'septemberPoints',
        sortable: true,
    },
    {
        name: 'October Points',
        selector: 'octoberPoints',
        sortable: true,
    },
    {
        name: 'November Points',
        selector: 'novemberPoints',
        sortable: true,
    },
    {
        name: 'Total Points',
        selector: 'totalPoints',
        sortable: true,
    },
];

const CustomerPointsTable = ({customerData}) => {
    const tableData = customerData.map(createCustomerResultObj);

    return (
        <DataTable
            title="Customer Points"
            columns={tableColumns}
            data={tableData}
            pagination={true}
            noHeader={true}
        />
    );
}

export default CustomerPointsTable;