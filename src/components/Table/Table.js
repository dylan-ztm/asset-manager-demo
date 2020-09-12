import React from 'react';

//TableHeader Component
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Tag Number</th>
                <th>Item Type</th>
                <th>Status</th>
                <th>Location</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
} //end TableHeader Component

//TableBody Component
const TableBody = ( {characterData, removeCharacter} ) => {
    const rows = characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.tagNumber}</td>
                <td>{row.itemType}</td>
                <td>{row.status}</td>
                <td>{row.location}</td>
                <td>
                    <button onClick={() => removeCharacter(index)}>Remove Asset</button>
                </td>
            </tr>
        );
    } //end map
    );

    return <tbody>{rows}</tbody>
} //end TableBody Component

// Table Component
const Table = ( {characterData, removeCharacter} ) => {
        return(
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
} //end Table Component

export default Table;