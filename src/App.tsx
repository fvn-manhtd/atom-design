import {
  Button,
  CheckBox,
  Grid,
  H1,
  RadioButton,
  TextArea,
  TextField,
  Typography,
} from "components/atoms";

export default function App() {
  return (
    <>
      <H1 fontWeight="600" fontSize="24px" color="gray.800" textAlign="left">
        H1 Heading text
      </H1>
      <Button mb={10} size="medium" variant="outlined" color="primary">
        This is Button
      </Button>
      <TextArea
        name="comment"
        placeholder="Write a review here..."
        fullwidth
        rows={8}
        mb={10}
        border="gray.500"
      />
      <CheckBox label="Demo Checkbox" color="secondary" mb="1rem" />
      <RadioButton
        name="credit-card"
        mb="1.5rem"
        color="secondary"
        label={
          <Typography ml="6px" fontWeight="600" fontSize="12px">
            Demo Radio Button
          </Typography>
        }
      />
      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <TextField
            name="shipping_name"
            label="Full Name"
            fullwidth
            mb="1rem"
          />
          <TextField
            name="shipping_email"
            label="Email Address"
            type="email"
            fullwidth
            mb="1rem"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextArea
            name="comment"
            placeholder="Write a review here..."
            fullwidth
            rows={8}
            mb={10}
            border="gray.500"
          />

          <CheckBox label="Demo Checkbox" color="secondary" mb="1rem" />

          <RadioButton
            name="credit-card"
            mb="1.5rem"
            color="secondary"
            label={
              <Typography ml="6px" fontWeight="600" fontSize="12px">
                Demo Radio Button
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
