import
{ 
    EXAMPLE_A,
    EXAMPLE_B
}
from "../constants";

export const exapmleA = () => ({
    type: EXAMPLE_A,
});

export const exampleB = (payload) => ({
    type: EXAMPLE_B,
    payload
});
