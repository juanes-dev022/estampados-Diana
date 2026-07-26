import frontImage from "../../../../assets/images/shirts/camisaBlancaFrente.png";
import backImage from "../../../../assets/images/shirts/camisaBLancaAtras.png";

import { shirtColors } from "../data/shirtColors";
import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";


const ShirtsDesignEditorPage =  () => {
    return(
        <div>
            <DesignEditor
            frontImage={frontImage}
            backImage={backImage}
            colors={shirtColors}
            />
        </div>
    )
}

export default ShirtsDesignEditorPage;