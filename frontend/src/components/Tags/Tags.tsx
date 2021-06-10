import React from 'react';

import {useHomeStyles} from "../../pages/Home/theme";
import {Divider, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";
import {selectIsTagsLoaded, selectTagsItems} from "../../store/tags/selectors";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const  Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectIsTagsLoaded)
  console.log(isLoaded)

  if(!isLoaded){
    return null
  }

  return   (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant='outlined'>
        <b>Актуальные темы</b>
      </Paper>
      <List>

        {items.map((obj)=>(
            <React.Fragment key={obj._id}>
                <ListItem  className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                  <ListItemText
                    primary={obj.name}
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: {obj.count}
                      </Typography>
                    }
                  />
              </Link>
                </ListItem>
              <Divider component='li'/>
            </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}