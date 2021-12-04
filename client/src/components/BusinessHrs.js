import { Typography } from "@material-ui/core";

const BusinessHrs = () => {
    
    return (
        <Typography variant='h5' align='left' gutterBottom>
                Business Hours
                <Typography variant='body2'>
                    <br />
                    <table>
                        <tbody>
                            <tr>
                                <td>MONDAY</td>
                                <td>4.30pm to 8.30pm</td>
                            </tr>
                            <tr>
                                <td>TUESDAY</td>
                                <td>4.30pm to 8.30pm</td>
                            </tr>
                            <tr>
                                <td>WEDNESDAY</td>
                                <td>4.30pm to 8.30pm</td>
                            </tr>
                            <tr>
                                <td>THURSDAY</td>
                                <td>4.30pm to 8.30pm</td>
                            </tr>
                            <tr>
                                <td>FRIDAY</td>
                                <td>4.30pm to 8.30pm</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>4.30pm to 7.30pm</td>
                            </tr>
                            <tr>
                                <td>SUNDAY</td>
                                <td>CLOSED</td>
                            </tr>
                        </tbody>
                    </table>
                </Typography>
        </Typography>
    );
}

export default BusinessHrs;