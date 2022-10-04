import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container py-3">
      <div>
        <h2 className="text-center">About us</h2>
        <p className="p-3 col-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At
          imperdiet dui accumsan sit amet nulla. Enim nec dui nunc mattis. Fusce
          ut placerat orci nulla pellentesque dignissim enim sit amet. Egestas
          pretium aenean pharetra magna ac placerat vestibulum. Ultrices
          tincidunt arcu non sodales neque sodales ut. Sollicitudin ac orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Eget sit amet
          tellus cras adipiscing enim eu. Adipiscing diam donec adipiscing
          tristique risus nec. Ut faucibus pulvinar elementum integer enim neque
          volutpat ac tincidunt. Ut tellus elementum sagittis vitae et leo. Id
          volutpat lacus laoreet non curabitur gravida arcu ac tortor. Sed
          vulputate odio ut enim blandit volutpat maecenas. Commodo odio aenean
          sed adipiscing diam donec. Viverra maecenas accumsan lacus vel
          facilisis volutpat est velit. Commodo quis imperdiet massa tincidunt
          nunc. Purus in massa tempor nec feugiat nisl pretium fusce id. Nulla
          facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Diam
          volutpat commodo sed egestas. Vestibulum sed arcu non odio euismod
          lacinia at quis risus. Varius vel pharetra vel turpis nunc eget lorem
          dolor. Placerat orci nulla pellentesque dignissim. Tempus imperdiet
          nulla malesuada pellentesque elit eget gravida. Pharetra convallis
          posuere morbi leo urna molestie at elementum. Convallis aenean et
          tortor at risus viverra adipiscing at in. Eu mi bibendum neque
          egestas. Lacus suspendisse faucibus interdum posuere. Natoque
          penatibus et magnis dis parturient montes nascetur ridiculus mus. Eu
          lobortis elementum nibh tellus molestie. Fermentum dui faucibus in
          ornare quam viverra orci sagittis eu. Non diam phasellus vestibulum
          lorem. Vel fringilla est ullamcorper eget nulla facilisi etiam. Ac
          placerat vestibulum lectus mauris ultrices eros. Risus at ultrices mi
          tempus imperdiet. Luctus accumsan tortor posuere ac ut consequat
          semper viverra. Ac turpis egestas integer eget aliquet nibh praesent
          tristique. Dui id ornare arcu odio ut sem nulla pharetra diam.
        </p>

        <div className="text-center">
          <Link to="/" className="btn btn-primary">
            Check More
          </Link>
        </div>
      </div>

   
    </div>
  );
}

export default About;
