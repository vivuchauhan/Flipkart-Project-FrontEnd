import React from "react";
import { useDispatch } from 'react-redux';
import * as actions from "../../redux/actions/cartAction"

import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
    color: #878787;
`;

const GroupedButton = ({item}) => {

    const dispatch = useDispatch();

    const handleIncrement = (id, quantity) => {
        dispatch(actions.IncDecQty(id, quantity ))
    };

    const handleDecrement = (id, quantity) => {
        dispatch(actions.IncDecQty(id, quantity ))

    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement(item.id, item.quantity-1)} disabled={item.quantity === 1}>-</StyledButton>
            <Button disabled>{item.quantity}</Button>
            <StyledButton onClick={() => handleIncrement(item.id, item.quantity+1)}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;