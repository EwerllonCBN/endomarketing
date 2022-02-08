import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
export default function Filter({ data, filterCard, clearFilterCard }: any) {
  const [checked, setChecked] = React.useState([""]);
  const types = ["event", "release", "publication"];
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log("List: ", currentIndex);
    if (currentIndex > -1) {
      newChecked.splice(currentIndex, 1);
      clearFilterCard();
    } else {
      filterCard(value);
      newChecked.splice(currentIndex, 1);
      newChecked.push(value);
    }
    console.log("check:", newChecked);
    setChecked(newChecked);
  };
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 370, bgcolor: "background.paper" }}
    >
      {types.map((value: any) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
