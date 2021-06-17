import React, { FunctionComponent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RecipeCard from '../card/card.component'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 600,
      width: 250
    }
  })
)

export const Home: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={6}>
          {[0, 1, 2, 4, 5, 6].map((value) => (
            <Grid key={value} item>
              <RecipeCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
