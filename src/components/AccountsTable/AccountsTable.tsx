import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../../interfaces/types";

interface AccountsTableProps {
  accounts: Account[];
}

const AccountsTable: React.FC<AccountsTableProps> = ({
  accounts
}) => {
  return (
    <table className="table table-hover accounts__table">
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Email</th>
          <th>Auth Token</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr
            key={account.accountId}
            className="accounts__row"
          >
            <td>
              <Link className="table__link" to={account.accountId}>
                {account.accountId}
              </Link>
            </td>
            <td>
              <Link className="table__link" to={account.accountId}>
                {account.email}
              </Link>
            </td>
            <td>
              <Link className="table__link" to={account.accountId}>
                {account.authToken}
              </Link>
            </td>
            <td>
              <Link className="table__link" to={account.accountId}>
                {account.creationDate}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountsTable;
