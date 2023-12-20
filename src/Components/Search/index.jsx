import { Input } from "antd";
import React, { useContext } from "react";
import { NotesContext } from "../../Context/NotesContext";
import { FlexBox } from "../Styled Components/Container";

const Search = () => {
    const { setSearch } = useContext(NotesContext);
    return (
        <FlexBox style={{flexGrow: 1}}>
            <Input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value.trim())}
            />
        </FlexBox>
    );
};

export default Search;
