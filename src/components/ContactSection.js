// components/ContactUs.jsx
import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
  Fade,
  CircularProgress,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Styled Components
const ContactWrapper = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-20%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-30%',
    left: '-10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 0',
    minHeight: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0',
  },
}));

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    gap: '40px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 420px',
  minWidth: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  '& img': {
    width: '100%',
    maxWidth: '480px',
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
    animation: `${floatAnimation} 6s ease-in-out infinite`,
    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
  },

  [theme.breakpoints.down('md')]: {
    flex: '0 0 auto',
    width: '100%',
    maxWidth: '500px',

    '& img': {
      maxWidth: '400px',
      width: '80%',
    },
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    
    '& img': {
      maxWidth: '280px',
      width: '75%',
    },
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 520px',
  minWidth: 0,
  width: '100%',
  maxWidth: '100%',

  [theme.breakpoints.down('md')]: {
    flex: '0 0 auto',
    width: '100%',
    maxWidth: '580px',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '0 4px',
  },
}));

const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: '50px',
  borderRadius: '24px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  width: '100%',
  '&:hover': {
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.12)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 20px',
    borderRadius: '16px',
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 800,
  color: '#1a1a2e',
  marginBottom: '8px',
  letterSpacing: '-0.5px',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #ff6b35 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#6b7280',
  marginBottom: '32px',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: '24px',
  },
}));

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  marginBottom: '24px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '16px',
  },
}));

const FieldGroup = styled(Box)({
  flex: '1',
  position: 'relative',
  minWidth: 0,
  width: '100%',
});

const FieldLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#2d2d4a',
  marginBottom: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: '#f8f9fa',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    '&:hover': {
      background: '#ffffff',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    },
    '& fieldset': {
      borderColor: 'transparent',
      borderWidth: '2px',
      transition: 'all 0.3s ease',
    },
    '&:hover fieldset': {
      borderColor: '#e0e0e0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35',
      borderWidth: '2px',
    },
    '&.Mui-error fieldset': {
      borderColor: '#f44336',
    },
    '& .MuiInputAdornment-root': {
      color: '#9ca3af',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6b7280',
    fontSize: '0.9rem',
    '&.Mui-focused': {
      color: '#ff6b35',
    },
    '&.Mui-error': {
      color: '#f44336',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
    fontSize: '0.95rem',
    '&::placeholder': {
      color: '#9ca3af',
      opacity: 1,
    },
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, -8px) scale(0.85)',
  },
  '& .MuiFormHelperText-root': {
    marginLeft: '4px',
    marginTop: '6px',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px',
      fontSize: '0.9rem',
    },
  },
}));

const MessageField = styled(StyledTextField)({
  '& .MuiOutlinedInput-root': {
    '& textarea': {
      minHeight: '140px',
      resize: 'vertical',
      padding: '14px 16px',
    },
  },
});

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a5c 100%)',
  borderRadius: '12px',
  padding: '16px 40px',
  fontSize: '1.05rem',
  fontWeight: 700,
  textTransform: 'none',
  color: 'white',
  marginTop: '12px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 30px rgba(255, 107, 53, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-200%',
    width: '200%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
    animation: `${shimmerAnimation} 3s infinite`,
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #ff5a24 0%, #ff7a4a 100%)',
    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.35)',
    transform: 'translateY(-3px)',
    '&::before': {
      animation: 'none',
    },
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
  '&:disabled': {
    background: 'linear-gradient(135deg, #ccc 0%, #ddd 100%)',
    boxShadow: 'none',
    transform: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '14px 32px',
    fontSize: '0.95rem',
  },
}));

const SuccessIcon = styled(CheckCircleIcon)({
  color: '#4caf50',
  fontSize: '2rem',
});

const ErrorIconStyled = styled(ErrorIcon)({
  color: '#f44336',
  fontSize: '2rem',
});

const ContactUs = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          newErrors.fullName = 'Full name is required';
        } else if (value.trim().length < 2) {
          newErrors.fullName = 'Name must be at least 2 characters';
        } else {
          delete newErrors.fullName;
        }
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const newErrors = {};
    const fields = ['fullName', 'email', 'message'];
    let isValid = true;

    fields.forEach((field) => {
      const value = formData[field].trim();
      if (!value) {
        newErrors[field] = `${field === 'fullName' ? 'Full name' : field === 'email' ? 'Email address' : 'Message'} is required`;
        isValid = false;
      } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field] = 'Email address is invalid';
        isValid = false;
      } else if (field === 'fullName' && value.length < 2) {
        newErrors[field] = 'Name must be at least 2 characters';
        isValid = false;
      } else if (field === 'message' && value.length < 10) {
        newErrors[field] = 'Message must be at least 10 characters';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {
      fullName: true,
      email: true,
      message: true,
    };
    setTouched(allTouched);

    if (!validateForm()) {
      // Focus on first error field
      const firstError = Object.keys(errors)[0];
      if (firstError && formRef.current) {
        const element = formRef.current.querySelector(`[name="${firstError}"]`);
        if (element) {
          element.focus();
        }
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSnackbar({
        open: true,
        message: 'Thank you! Your message has been sent successfully. 🎉',
        severity: 'success',
      });
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <Box id="contact" sx={{ overflow: 'hidden' }}>
    <ContactWrapper>
      <MainContainer>
        <ContentContainer>
          {/* Image Section */}
          <ImageContainer>
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp35.svg"
              alt="Contact Illustration"
              loading="lazy"
            />
          </ImageContainer>

          {/* Form Section */}
          <FormContainer>
            <FormWrapper elevation={0}>
              <FormTitle variant="h2">
                Contact Me
              </FormTitle>
              <FormSubtitle variant="body1">
                Have a question or want to work together? Let's chat!
              </FormSubtitle>

              <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* First Row - Full Name and Email */}
                <FormRow>
                  <FieldGroup>
                    <FieldLabel variant="body2">
                      <PersonIcon sx={{ fontSize: '1rem', color: '#ff6b35' }} />
                      Full Name
                    </FieldLabel>
                    <StyledTextField
                      fullWidth
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      variant="outlined"
                      error={!!errors.fullName && touched.fullName}
                      helperText={touched.fullName && errors.fullName}
                      size="medium"
                      disabled={isSubmitting}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel variant="body2">
                      <EmailIcon sx={{ fontSize: '1rem', color: '#ff6b35' }} />
                      Email Address
                    </FieldLabel>
                    <StyledTextField
                      fullWidth
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      variant="outlined"
                      error={!!errors.email && touched.email}
                      helperText={touched.email && errors.email}
                      size="medium"
                      disabled={isSubmitting}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FieldGroup>
                </FormRow>

                {/* Message Row */}
                <Box sx={{ mb: 2 }}>
                  <FieldLabel variant="body2">
                    <MessageIcon sx={{ fontSize: '1rem', color: '#ff6b35' }} />
                    Message
                  </FieldLabel>
                  <MessageField
                    fullWidth
                    name="message"
                    multiline
                    rows={1}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Write your message here..."
                    variant="outlined"
                    error={!!errors.message && touched.message}
                    helperText={touched.message && errors.message}
                    size="medium"
                    disabled={isSubmitting}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                          <MessageIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Submit Button */}
                <SubmitButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Box>
            </FormWrapper>
          </FormContainer>
        </ContentContainer>
      </MainContainer>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Fade}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          iconMapping={{
            success: <SuccessIcon />,
            error: <ErrorIconStyled />,
          }}
          sx={{
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            '& .MuiAlert-icon': {
              color: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
            },
            '& .MuiAlert-message': {
              fontSize: '0.95rem',
              fontWeight: 500,
            },
            minWidth: '300px',
            '@media (max-width: 600px)': {
              minWidth: 'auto',
              width: '90%',
              margin: '0 16px',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactWrapper>
    </Box>
  );
};

export default ContactUs;