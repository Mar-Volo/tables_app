import { useState, useEffect } from "react";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";
import { Account } from "../interfaces/types";



const AccountsPage: React.FC = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <main>
      {accounts.length > 0 && (
        <Container className="container accounts__container">
          <h1 className="accounts__title">Accounts</h1>
          <AccountsTable accounts={accounts} />
        </Container>
      )}
    </main>
  );
};

export default AccountsPage;
