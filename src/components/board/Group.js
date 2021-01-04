import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as dayjs from "dayjs";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e1f5fe",
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

const Group = (props) => {
  const { className, groupDisplay } = props;
  const { title, issue, createdAt } = groupDisplay;
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title={title}></CardHeader>
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Summary</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Timeline</TableCell>
                <TableCell>Date of Submission</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Resolved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issue.map((i) => (
                <TableRow hover key={i._id}>
                  <TableCell>{i.summary}</TableCell>
                  <TableCell>
                    {dayjs(i.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    <Chip color="primary" label={i.status} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};
Group.propTypes = {
  className: PropTypes.string,
};

export default connect((state) => state.userBoard)(Group);
