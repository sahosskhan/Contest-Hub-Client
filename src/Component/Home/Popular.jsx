import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import TodayIcon from '@mui/icons-material/Today';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Popular = () => {
    return (
        <div>
                   <h1 className="text-center text-5xl mb-8 uppercase font-bold">Our<span className="text-red-500"> Popular Contest</span> Is Here</h1>
<div className='my-8'>
<Card color={Error} sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <EmojiPeopleIcon  />
            <Typography>55</Typography>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i.ibb.co/gJMsJZs/ai.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
 <div className='flex justify-center items-center gap-2 my-2'>

      <TodayIcon/> 
      <Typography fontSize={19}>September 14, 2016</Typography>
 </div>
 <div className='flex justify-center items-center gap-2 mb-6'>
<Link>
<Button variant="contained" color='error' endIcon={<ExploreIcon />}>
 See Details
</Button>
</Link>
 </div>


    </Card> 
</div>
            
            
        </div>
    );
};

export default Popular;