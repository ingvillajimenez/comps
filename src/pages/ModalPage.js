import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        quam nisi, id cursus turpis congue ut. Fusce luctus nulla enim. Aenean
        eget bibendum nibh, non luctus quam. Praesent laoreet augue orci, vitae
        fermentum ligula mattis eu. Sed faucibus, lacus vitae tristique iaculis,
        felis purus vulputate metus, sed feugiat est tellus a arcu. Ut turpis
        enim, ullamcorper vel odio in, pharetra efficitur ipsum. Duis nec
        pulvinar arcu. Aliquam erat volutpat. Nullam ut felis et ante elementum
        sollicitudin a ut ex. Duis vehicula pulvinar mattis. Suspendisse ac
        dapibus leo. Maecenas mattis mi non tortor interdum scelerisque id nec
        lacus. Praesent at aliquet sapien, ac lobortis elit. Proin placerat odio
        non sapien pulvinar, quis dictum felis lobortis. Nullam in laoreet nisl,
        ut lacinia neque.
      </p>
    </div>
  );
}

export default ModalPage;
