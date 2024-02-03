import { useState, useEffect } from "react";
import { getAccounts } from "../fakeApi/fakeApi";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";
import { Account } from "../interfaces/types";

const AccountsPage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await getAccounts();
      if (response.length !== 0) {
        setAccounts(response);
      }
    };
    fetchAccounts();
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
