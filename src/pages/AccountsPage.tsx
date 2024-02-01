import { useState, useEffect } from "react";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";
import { Account } from "../interfaces/types";
import { accounts } from "../../db/createFakeData";


const AccountsPage: React.FC = () => {
    const [accountsData, setAccountsData] = useState<Account[]>([]);

  useEffect(() => {
    const accountsArr = accounts;
    setAccountsData(accountsArr);
  }, []);
console.log(accounts);
  return (
    <main>
      {accounts.length > 0 && (
        <Container className="container accounts__container">
          <h1 className="accounts__title">Accounts</h1>
          <AccountsTable accounts={accountsData} />
        </Container>
      )}
    </main>
  );
};

export default AccountsPage;
