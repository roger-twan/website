import CommonHeader from '@/components/commonHeader'
import Layout from '@/components/layout'
import { ReactElement } from 'react'
import Image from 'next/image'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import projectList, { ProjectInfo } from './projectList.data'

const PagePortfolio = () => {
  return (
    <>
      <CommonHeader title="Portfolio" />
      <Container>
        <Grid container rowSpacing={5} style={{ padding: '5vh 0' }}>
          {projectList.map((item: ProjectInfo) => (
            <Grid xs={4} key={item.title}>
              <Card sx={{ maxWidth: 345 }}>
                <Image
                  src={item.img}
                  style={{ width: '100%', height: 220 }}
                  alt={item.title}
                  placeholder="blur"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  {item.platforms.map((platform: string) => (
                    <Chip
                      key={platform}
                      size="small"
                      label={platform}
                      style={{ marginRight: '4px' }}
                    />
                  ))}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    height={40}
                  >
                    {item.techStacks.map((tech: string, index: number) =>
                      index === item.techStacks.length - 1 ? tech : `${tech} · `
                    )}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" target="blank" href={item.url}>
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

PagePortfolio.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PagePortfolio
