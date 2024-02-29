import DnaItem from './Dna';

export default function DnaView(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>FASTA Id</th>
                    <th>Sequence</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {props.dnaList.map(dna => <DnaItem dna={dna} />)}
            </tbody>
        </table>
    )
}