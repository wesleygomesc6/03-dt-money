import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoIgnite} alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}