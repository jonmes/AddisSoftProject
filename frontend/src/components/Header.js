import React, {Fragment} from 'react';
import {Nav, Container, Button, SearchBar, Bordering, A} from './HeaderElements';

const Header = () => {
    return (
        <Fragment>
            <Bordering>
            <Nav>
                    <Container>
                        <A href="/employee/adding_new_employee">ADD</A>
                        {/* <SearchBar placeholder="Search..."></SearchBar> */}
                        {/* <Button type='submit' className='fa fa-search'></Button> */}
                        <A href="/Logging_out">LogOut</A>
                    </Container>
                </Nav>
                </Bordering>
        </Fragment>
    )
}

export default Header;