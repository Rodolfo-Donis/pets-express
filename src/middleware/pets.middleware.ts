import type { Request, Response, NextFunction } from "express";

const validateNumericId = (
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    res.status(400).json({ message: "Pet id must be a number" });
  } else {
    next();
  }
};

const validatePassword = (
  req: Request<{}, unknown, {}, { password?: string }>,
  res: Response<{ message: string }>,
  next: NextFunction,
) => {
  const { password } = req.query;
  if (!password || password.toLowerCase() !== "auth") {
    res
      .status(401)
      .json({ message: "not authorized to consume this endpoint" });
  } else {
    next();
  }
};
export { validateNumericId, validatePassword };
