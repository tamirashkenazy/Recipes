import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const signInUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch'
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
)
