import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import video1 from '../video/homeVideo.mp4';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: '#fff',
}));

const BackgroundImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(https://i.ibb.co.com/204pPqnx/background-Home.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '1200px',
  height: '70%',
  maxHeight: '600px',
  zIndex: 3,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[10],
  
  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: '50%',
  },
  
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    height: '40%',
  },
}));


const NewHome = () => {
  // Your Google Drive video link: https://drive.google.com/file/d/1yBHblcxpwKr7rOO23CV0ViWEC6TtW5lN/view?usp=drive_link
  // Extracted ID: 1yBHblcxpwKr7rOO23CV0ViWEC6TtW5lN
  // IMPORTANT: Make sure the video sharing settings are set to "Anyone with the link can view"
  
  const googleDriveVideoId = '1yBHblcxpwKr7rOO23CV0ViWEC6TtW5lN';
  
  // Correct Google Drive embed URL
  const videoUrl = `https://drive.google.com/uc?export=view&id=${googleDriveVideoId}`;
  
  // Alternative direct link format (sometimes more reliable)
//   const directVideoUrl = `https://docs.google.com/uc?export=download&id=${googleDriveVideoId}`;

  return (
    <HeroContainer>
      {/* Background Image */}
      <BackgroundImage />
      
      {/* Video Overlay */}
      <VideoContainer>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'scale-down',
          }}
          controls={false}
          preload="auto" // Ensures video loads as soon as possible
        >
          {/* Try the direct link first, fallback to embed link */}
          <source src={video1} type="video/mp4" />
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      
      
    </HeroContainer>
  );
};

export default NewHome;