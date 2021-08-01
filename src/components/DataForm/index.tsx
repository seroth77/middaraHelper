import * as React from "react";
import {default as  WeaponsData} from "../../source/weapons.json";
import type { IWeaponsTypes } from "../../api/model/weaponsTypes";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Dice } from "../../api/model/types";
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';

// const handleSubmit = (e: Event) => {
//     e.preventDefault;
// }


console.log(WeaponsData);
const DataForm: React.FC = () => {
    const [weapon, setWeapon] = React.useState({} as IWeaponsTypes);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selected  = event.target.value as number;
        const singleData = WeaponsData[selected] as IWeaponsTypes;
        console.log(selected);
        setWeapon(singleData);
    };
    return (
        <>
            <Select variant="outlined" onChange={handleChange}>
                {WeaponsData.map((value, index) => (
                    <MenuItem key={value.id} value={index}>
                        {value.name}
                    </MenuItem>
                ))}
            </Select>

          <table>
              <tr>
                  <td>Name:</td>
                  <td>{weapon.name}</td>
              </tr>
              <tr>
                  {weapon.die !== null && weapon.die?.map((value, index) => (
                    <td key={index}>
                        <img src={`../../assets/die_${Dice[value]}.png`} />
                    </td>
                  ))}
              </tr>
          </table>
        </>
    )
}

// {WeaponsData.map((value, index) => (
//     // <MenuItem key={value.id} value={value.id}>
//     //     {value.name}
//     // </MenuItem>   
//     <MenuItem>1</MenuItem>
// ))}

export default DataForm;