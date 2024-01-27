import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../../interfaces/types";

interface AccountsTableProps {
  accounts: Account[];
  handleClick: (accountId: string) => void;
}

const AccountsTable: React.FC<AccountsTableProps> = ({
  accounts,
  handleClick,
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
            onClick={() => handleClick(account.accountId)}
          >
            <td>
              <Link className="table__link" to="/profiles">
                {account.accountId}
              </Link>
            </td>
            <td>
              <Link className="table__link" to="/profiles">
                {account.email}
              </Link>
            </td>
            <td>
              <Link className="table__link" to="/profiles">
                {account.authToken}
              </Link>
            </td>
            <td>
              <Link className="table__link" to="/profiles">
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
