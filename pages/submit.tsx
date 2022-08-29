import DanceBackground from 'components/DanceBackground'
import Navigation from 'components/Navigation'
import { Input, CheckBox, Button } from 'ui-library'

function SubmitPage() {
  return (
    <>
      <Navigation />
      <DanceBackground title="Submit a dance spot!" />
      <form>
        <Input
          id="email"
          label="Enter your email"
          name="email"
          type="text"
          value=""
          placeholder="johndoe@gmail.com"
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />
        <Input
          id="placeName"
          label="Dance Place Name"
          name="placeName"
          type="text"
          value=""
          placeholder="New Gen Dance Studio"
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />
        <Input
          id="Address"
          label="Address"
          name="address"
          type="text"
          value=""
          placeholder="25 King Street, Toronto, On, Canada"
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />
        <Input
          id="Schedule (optional)"
          label="When can people dance here?"
          name="email"
          type="text"
          value=""
          placeholder="Friday's 10pm-2am"
          onChange={() => {
            // do something
          }}
          errorMessage="error"
          isTextArea
        />

        <p className="text-h6">Please enter one of the following:</p>

        <Input
          id="website"
          label="Website"
          name="website"
          type="text"
          value=""
          placeholder=""
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />

        <Input
          id="instagram"
          label="Instagram"
          name="instagram"
          type="text"
          value=""
          placeholder=""
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />

        <Input
          id="facebook"
          label="Facebook"
          name="facebook"
          type="text"
          value=""
          placeholder=""
          onChange={() => {
            // do something
          }}
          errorMessage="error"
        />

        <CheckBox />
        <CheckBox />

        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </form>
    </>
  )
}

export default SubmitPage
