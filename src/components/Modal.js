import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import defaultTheme from "../const/defaultTheme";

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(56, 74, 100, 0.6);

  z-index: 1000;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 580px;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;

  position: relative;
`;

const StyledTable = styled.table`
  width: 100%;

  th {
    text-align: left;
    padding: 5px 50px 5px 0;
  }

  td {
    color: ${defaultTheme.palette.primary.contrastText};

    p {
      max-width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: -15px;
  left: calc((100% - 40px) / 2);
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: none;
  background-color: ${defaultTheme.palette.primary.main};
  color: ${defaultTheme.palette.primary.white};
  font-size: 2rem;
`;

const Modal = ({ setIsModalShow, currentUser }) => {
  return (
    <ModalWrap onClick={() => setIsModalShow(false)}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <Typography variant="h4" mb={2}>
          {currentUser.name}
        </Typography>

        <StyledTable>
          <tbody>
            <tr>
              <th>
                <Typography variant="body1">Телефон:</Typography>
              </th>
              <td>
                <Typography variant="body1">
                  <Link href={`tel:${currentUser.phone}`} color="inherit">
                    {currentUser.phone}
                  </Link>
                </Typography>
              </td>
            </tr>

            <tr>
              <th>
                <Typography variant="body1">Почта:</Typography>
              </th>
              <td>
                <Typography variant="body2">
                  <Link
                    href={`mailto:${currentUser.email}?subject=Let's contact`}
                    color="inherit"
                  >
                    {currentUser.email}
                  </Link>
                </Typography>
              </td>
            </tr>

            <tr>
              <th>
                <Typography variant="body1">Дата приема:</Typography>
              </th>
              <td>
                <Typography variant="body2">{currentUser.hire_date}</Typography>
              </td>
            </tr>

            <tr>
              <th>
                <Typography variant="body1">Должность:</Typography>
              </th>

              <td>
                <Typography variant="body2">
                  {currentUser.position_name}
                </Typography>
              </td>
            </tr>

            <tr>
              <th>
                <Typography variant="body1">Подразделение:</Typography>
              </th>

              <td>
                <Typography variant="body2">
                  {currentUser.department}
                </Typography>
              </td>
            </tr>
          </tbody>
        </StyledTable>
        <StyledButton onClick={() => setIsModalShow(false)}>
          &times;
        </StyledButton>
      </ModalBody>
    </ModalWrap>
  );
};

export default Modal;
