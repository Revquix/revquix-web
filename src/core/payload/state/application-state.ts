import {LoaderSliceState} from "@/src/core/payload/state/loader-slice-state";
import {AuthSliceState} from "@/src/core/payload/state/auth-slice-state";

export type ApplicationState = {
    loader: LoaderSliceState;
    auth: AuthSliceState;
}