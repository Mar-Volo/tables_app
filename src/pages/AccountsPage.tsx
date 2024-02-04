import { useState, useEffect } from "react";
import { getAccounts } from "../fakeApi/fakeApi";
import AccountsTable from "../components/AccountsTable/AccountsTable";
import Container from "../components/Container/Container";
import { Account } from "../interfaces/types";
import Pagination from "../components/Pagination/Pagination";
const AccountsPage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [AllAccountsLength, setAllAccountsLength] = useState<number>(60);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  
  useEffect(() => {
    const fetchAccounts = async () => {
        const response = await getAccounts(min, max);
        if (response) {
          setAccounts(response.dataToWrite);
          setAllAccountsLength(response.allDataLength);
          console.log(response);
        }
      };
    fetchAccounts();
  }, [min, max]);

  const prevOrNextClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.dataset.prev) {
        setMin((prev) => prev -= 10);
        setMax((prev) => prev -= 10);
      } else if (e.currentTarget.dataset.next) {
        setMin((prev) => prev += 10);
        setMax((prev) => prev += 10);
      }
  };

  console.log(min);
  console.log(max);
  return (
    <main>
      {accounts.length > 0 && (
        <Container className="container accounts__container">
          <h1 className="accounts__title">Accounts</h1>
          <AccountsTable accounts={accounts} />
          <Pagination className="pagination__nav" dataCount={AllAccountsLength} dataToWriteCount={accounts.length} handleClick={prevOrNextClick}/>   
        </Container>
      )}
    </main>
  );
  
};

export default AccountsPage;


