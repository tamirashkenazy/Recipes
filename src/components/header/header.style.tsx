import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const headerUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(5)
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Courgette'
    }
  })
)
