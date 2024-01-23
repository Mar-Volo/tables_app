import { ReactNode } from 'react';
interface HeaderProps {
    children: ReactNode;
  }
const Header : React.FC<HeaderProps> = ({children}) => {
    return <header className="footer">{children}</header>
}

export default Header;