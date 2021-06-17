import { makeStyles, Theme, createStyles } from '@material-ui/core'

export const commonStyles = makeStyles((theme: Theme) =>
  createStyles({
    textCenter: {
      textAlign: 'center'
    },
    padding: {
      padding: '4vh'
    },
    margin: { margin: '4vh' },
    marginBottom: { marginBottom: '2rem' },
    marginTop: { marginTop: '2rem' }
  })
)
