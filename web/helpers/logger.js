/*
 * Postfacto, a free, open-source and self-hosted retro tool aimed at helping
 * remote teams.
 *
 * Copyright (C) 2016 - Present Pivotal Software, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 *
 * it under the terms of the GNU Affero General Public License as
 *
 * published by the Free Software Foundation, either version 3 of the
 *
 * License, or (at your option) any later version.
 *
 *
 *
 * This program is distributed in the hope that it will be useful,
 *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *
 * GNU Affero General Public License for more details.
 *
 *
 *
 * You should have received a copy of the GNU Affero General Public License
 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

class Logger {

  static debug(message) {
    Logger.log(message, 'DEBUG');
  }

  static info(message) {
    Logger.log(message, 'INFO');
  }

  static warn(message) {
    Logger.log(message, 'WARN');
  }

  static log(message, logLevel) {
    const sumoLogicUrl = global.Retro.config.sumo_logic_url;
    if (sumoLogicUrl) {
      const prefix = `${new Date().toISOString()} - postfacto-web - ${logLevel}: `;
      const url = `${sumoLogicUrl}?${prefix}${message}`;
      const img = new Image();
      img.src = url;
    }
  }
}

module.exports = Logger;