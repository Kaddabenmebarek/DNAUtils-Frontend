import axios from 'axios'
import React from 'react'

function DnaItem(props) {
    const deleteDnaHandler = (fasta_id) => {
    axios.delete(`http://localhost:8000/api/dna/${fasta_id}`)
        .then(res => console.log(res.data)) }
  
    return (
        <tr>
            <td>
                <span style={{ fontWeight: 'bold, underline' }}>{props.dna.fasta_id}</span>
            </td>
            <td>
            <p className="text">   
                {props.dna.seq}
            </p>
            </td>
            <td>
                <button onClick={() => deleteDnaHandler(props.dna.fasta_id)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>Remove</button>
            </td>
        </tr>
    )
} 

export default DnaItem;