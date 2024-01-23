// import { useState, useEffect } from "react";
// import { accountsData } from "../fakeData/fakeData";
// import AccountsTable from '../components/AccountsTable/AccountsTable';
// import { Account } from "../interfaces/types";

// const AccountsPage: React.FC = () => {
//     // Стейт для зберігання облікових записів та вибраного профайлу
//     const [accounts, setAccounts] = useState<Account[]>([]);
//     const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
//         null
//       );

//        // Ефект для завантаження облікових записів при монтажі компонента
//       useEffect(() => {
//         setAccounts(accountsData());
//       }, []);
//       const handleAccountClick = (accountId: string) => {
//         setSelectedAccountId(accountId);
//       };

//   return (
//     <div>
//         <h1>Accounts App</h1>
//         <AccountsTable accounts={accounts} handleClick={handleAccountClick}/>
//     </div>
//   );
// };

// export default AccountsPage;

import { useEffect } from "react";
import useAccountsStore from "../store/accountsStore";
import { accountsData } from "../fakeData/fakeData";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";

const AccountsPage: React.FC = () => {
  const { accounts, setAccounts, setSelectedAccount } = useAccountsStore(
    (state) => ({
      accounts: state.accounts,
      setAccounts: state.setAccounts,
      selectedAccount: state.selectedAccount,
      setSelectedAccount: state.setSelectedAccount,
    })
  );

  useEffect(() => {
    setAccounts(accountsData());
  }, [setAccounts]);

  const handleAccountClick = (accountId: string) => {
    const selected = accounts.find((item) => item.accountId === accountId);

    setSelectedAccount(selected || null);
  };

  return (
    <main>
      {accounts && ( 
       
          <Container className="container accounts__container"><h1 className="accounts__title">Accounts App</h1>
          <AccountsTable accounts={accounts} handleClick={handleAccountClick} />
          </Container>
        
      )}
    </main>
  );
};

export default AccountsPage;
