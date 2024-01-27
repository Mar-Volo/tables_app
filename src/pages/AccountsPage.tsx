import { useState, useEffect } from "react";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";
import { Account } from "../interfaces/types";
import { accountsStorageKey } from "../fakeData/fakeData";
import { campaignsStorageKey } from "./ProfilesPage";

const getAccountsData = () => {
  const storedData = localStorage.getItem(accountsStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};
export const getCampaignsData = () => {
  const storedData = localStorage.getItem(campaignsStorageKey);
  return storedData ? JSON.parse(storedData).campaigns : [];
};
export const profilesStorageKey = "fakeProfaileData";
export const accountIdStorageKey = "fakeAccountIdData";

const AccountsPage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const accountsData = getAccountsData();
    setAccounts(accountsData);
  }, []);

  const handleAccountClick = (accountId: string) => {
    const selected = accounts.find((item) => item.accountId === accountId);

    if (selected) {
      console.log(selected.profiles);
      localStorage.setItem(
        profilesStorageKey,
        JSON.stringify(selected.profiles)
      );
      localStorage.setItem(accountIdStorageKey, JSON.stringify(accountId));
    } else {
      console.error(`Account with ID ${accountId} not found`);
    }
  };

  return (
    <main>
      {accounts.length > 0 && (
        <Container className="container accounts__container">
          <h1 className="accounts__title">Accounts</h1>
          <AccountsTable accounts={accounts} handleClick={handleAccountClick} />
        </Container>
      )}
    </main>
  );
};

export default AccountsPage;
